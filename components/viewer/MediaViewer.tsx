"use client";

import Image from "next/image";
import {
  AnimatePresence,
  motion,
} from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Info,
  Minus,
  Plus,
  RotateCcw,
  X,
} from "lucide-react";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import type { GalleryItem } from "@/types/media";

interface MediaViewerProps {
  items: GalleryItem[];
  selectedIndex: number | null;
  onIndexChange: (index: number | null) => void;
  onClose: () => void;
}

const transition = {
  type: "spring" as const,
  stiffness: 340,
  damping: 34,
  mass: 0.85,
};

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export default function MediaViewer({
  items,
  selectedIndex,
  onIndexChange,
  onClose,
}: MediaViewerProps) {
  const [zoom, setZoom] = useState(1);
  const [showInformation, setShowInformation] = useState(true);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  const selectedItem = useMemo(() => {
    if (selectedIndex === null) {
      return null;
    }

    return items[selectedIndex] ?? null;
  }, [items, selectedIndex]);

  const resetZoom = useCallback(() => {
    setZoom(1);
  }, []);

  const goToPrevious = useCallback(() => {
    if (selectedIndex === null || items.length === 0) {
      return;
    }

    resetZoom();

    onIndexChange(
      selectedIndex === 0
        ? items.length - 1
        : selectedIndex - 1,
    );
  }, [
    items.length,
    onIndexChange,
    resetZoom,
    selectedIndex,
  ]);

  const goToNext = useCallback(() => {
    if (selectedIndex === null || items.length === 0) {
      return;
    }

    resetZoom();

    onIndexChange(
      selectedIndex === items.length - 1
        ? 0
        : selectedIndex + 1,
    );
  }, [
    items.length,
    onIndexChange,
    resetZoom,
    selectedIndex,
  ]);

  const closeViewer = useCallback(() => {
    resetZoom();
    onClose();
  }, [onClose, resetZoom]);

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    previouslyFocusedElement.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeViewer();
      }

      if (event.key === "ArrowLeft") {
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }

      if (event.key === "+") {
        setZoom((currentZoom) =>
          Math.min(currentZoom + 0.5, 4),
        );
      }

      if (event.key === "-") {
        setZoom((currentZoom) =>
          Math.max(currentZoom - 0.5, 1),
        );
      }

      if (event.key === "Tab") {
        const focusableElements = dialogRef.current?.querySelectorAll<HTMLElement>(
          focusableSelector,
        );

        if (!focusableElements || focusableElements.length === 0) {
          event.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }

        if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      previouslyFocusedElement.current?.focus();
    };
  }, [
    closeViewer,
    goToNext,
    goToPrevious,
    selectedIndex,
  ]);

  function increaseZoom() {
    setZoom((currentZoom) =>
      Math.min(currentZoom + 0.5, 4),
    );
  }

  function decreaseZoom() {
    setZoom((currentZoom) =>
      Math.max(currentZoom - 0.5, 1),
    );
  }

  function handleDoubleClick() {
    setZoom((currentZoom) =>
      currentZoom === 1 ? 2 : 1,
    );
  }

  function handleDownload() {
    if (!selectedItem) {
      return;
    }

    const link = document.createElement("a");
    link.href = selectedItem.src;
    link.download =
      selectedItem.src.split("/").pop() ??
      selectedItem.title;
    link.click();
  }

  const formattedDate = selectedItem
    ? new Intl.DateTimeFormat("es-CO", {
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      }).format(new Date(`${selectedItem.date}T00:00:00Z`))
    : "";

  return (
    <AnimatePresence>
      {selectedItem && selectedIndex !== null && (
        <motion.div
          key="viewer-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.24 }}
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-2xl"
          role="dialog"
          aria-modal="true"
          aria-label={`Visor de ${selectedItem.title}`}
          ref={dialogRef}
          tabIndex={-1}
        >
          <div
            className="absolute inset-0"
            onClick={closeViewer}
            aria-hidden="true"
          />

          <header className="absolute inset-x-0 top-0 z-30 flex h-20 items-center justify-between gap-2 px-3 sm:px-6">
            <div className="shrink-0 rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-xs text-white/60 backdrop-blur-xl sm:px-4 sm:py-2 sm:text-sm">
              {selectedIndex + 1} de {items.length}
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              {selectedItem.type === "image" && (
                <>
                  <ViewerButton
                    label="Alejar"
                    onClick={decreaseZoom}
                    disabled={zoom <= 1}
                  >
                    <Minus size={18} />
                  </ViewerButton>

                  <ViewerButton
                    label="Restablecer zoom"
                    onClick={resetZoom}
                    disabled={zoom === 1}
                  >
                    <RotateCcw size={17} />
                  </ViewerButton>

                  <ViewerButton
                    label="Acercar"
                    onClick={increaseZoom}
                    disabled={zoom >= 4}
                  >
                    <Plus size={18} />
                  </ViewerButton>
                </>
              )}

              <ViewerButton
                label="Mostrar u ocultar información"
                onClick={() =>
                  setShowInformation((current) => !current)
                }
              >
                <Info size={18} />
              </ViewerButton>

              <ViewerButton
                label="Descargar"
                onClick={handleDownload}
              >
                <Download size={18} />
              </ViewerButton>

              <ViewerButton
                label="Cerrar"
                onClick={closeViewer}
              >
                <X size={19} />
              </ViewerButton>
            </div>
          </header>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Recuerdo anterior"
                className="absolute left-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/35 backdrop-blur-xl transition hover:bg-white/10 sm:left-6"
              >
                <ChevronLeft size={25} />
              </button>

              <button
                type="button"
                onClick={goToNext}
                aria-label="Recuerdo siguiente"
                className="absolute right-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/35 backdrop-blur-xl transition hover:bg-white/10 sm:right-6"
              >
                <ChevronRight size={25} />
              </button>
            </>
          )}

          <main className="absolute inset-0 flex items-center justify-center px-4 pb-36 pt-24 sm:px-20">
            <motion.div
              layoutId={`media-${selectedItem.id}`}
              transition={transition}
              className="relative z-20 flex h-full w-full items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              {selectedItem.type === "image" ? (
                <motion.div
                  animate={{ scale: zoom }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 28,
                  }}
                  drag={zoom > 1}
                  dragConstraints={{
                    left: -500,
                    right: 500,
                    top: -500,
                    bottom: 500,
                  }}
                  dragElastic={0.08}
                  onDoubleClick={handleDoubleClick}
                  className={
                    zoom > 1
                      ? "relative h-full w-full cursor-grab active:cursor-grabbing"
                      : "relative h-full w-full cursor-zoom-in"
                  }
                >
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    fill
                    priority
                    sizes="100vw"
                    className="select-none object-contain"
                    draggable={false}
                  />
                </motion.div>
              ) : (
                <video
                  src={selectedItem.src}
                  poster={selectedItem.poster}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-full max-w-full rounded-xl object-contain"
                >
                  Tu navegador no puede reproducir este video.
                </video>
              )}
            </motion.div>
          </main>

          <AnimatePresence>
            {showInformation && (
              <motion.aside
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 24 }}
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-20 left-1/2 z-30 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 rounded-[22px] border border-white/10 bg-black/55 p-5 backdrop-blur-2xl sm:p-6"
              >
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-medium tracking-[-0.03em]">
                    {selectedItem.title}
                  </h2>

                  <p className="text-sm capitalize text-white/45">
                    {formattedDate}
                    {selectedItem.location
                      ? ` · ${selectedItem.location}`
                      : ""}
                  </p>
                </div>

                {selectedItem.description && (
                  <p className="mt-4 text-sm leading-6 text-white/75">
                    {selectedItem.description}
                  </p>
                )}

                {selectedItem.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/[0.07] px-3 py-1.5 text-xs text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </motion.aside>
            )}
          </AnimatePresence>

          {items.length > 1 && (
            <div className="absolute inset-x-0 bottom-3 z-30 flex justify-center">
              <div className="flex max-w-[calc(100vw-2rem)] gap-2 overflow-x-auto rounded-[18px] border border-white/10 bg-black/55 p-2 backdrop-blur-2xl">
                {items.map((item, index) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => {
                      resetZoom();
                      onIndexChange(index);
                    }}
                    aria-label={`Abrir ${item.title}`}
                    className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-xl transition ${
                      index === selectedIndex
                        ? "ring-2 ring-[var(--accent-light)]"
                        : "opacity-45 hover:opacity-100"
                    }`}
                  >
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt=""
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    ) : (
                      <video
                        src={item.src}
                        poster={item.poster}
                        muted
                        preload="metadata"
                        className="h-full w-full object-cover"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ViewerButtonProps {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

function ViewerButton({
  children,
  label,
  onClick,
  disabled = false,
}: ViewerButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/35 backdrop-blur-xl transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30 sm:h-10 sm:w-10"
    >
      {children}
    </button>
  );
}
