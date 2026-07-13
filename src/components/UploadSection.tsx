import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, FileText, Image, File, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  preview?: string;
}

function FileIcon({ type }: { type: string }) {
  if (type.startsWith("image/")) return <Image className="w-5 h-5 text-blue-500" />;
  if (type === "application/pdf") return <FileText className="w-5 h-5 text-red-500" />;
  return <File className="w-5 h-5 text-gray-500" />;
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function UploadSection() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback((incoming: FileList | null) => {
    if (!incoming) return;
    const next: UploadedFile[] = Array.from(incoming).map((f) => ({
      id: `${f.name}-${f.size}-${Date.now()}`,
      name: f.name,
      size: f.size,
      type: f.type,
      preview: f.type.startsWith("image/") ? URL.createObjectURL(f) : undefined,
    }));
    setFiles((prev) => {
      const existingNames = new Set(prev.map((p) => p.name));
      return [...prev, ...next.filter((n) => !existingNames.has(n.name))];
    });
  }, []);

  const onDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);
      addFiles(e.dataTransfer.files);
    },
    [addFiles]
  );

  const removeFile = (id: string) => {
    setFiles((prev) => {
      const f = prev.find((f) => f.id === id);
      if (f?.preview) URL.revokeObjectURL(f.preview);
      return prev.filter((f) => f.id !== id);
    });
  };

  const handleSubmit = () => {
    if (files.length === 0) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    files.forEach((f) => { if (f.preview) URL.revokeObjectURL(f.preview); });
    setFiles([]);
    setSubmitted(false);
  };

  return (
    <section id="upload" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-background -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center rounded-full px-3 py-1 mb-4 text-sm font-medium bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
            <span className="flex h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400 mr-2" />
            Optional — but recommended
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Share Your Brand Assets
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upload your logo, color swatches, inspiration screenshots, or any files that help our developers understand your vision.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="text-center py-16 rounded-2xl border border-green-200 dark:border-green-800 bg-green-50/60 dark:bg-green-900/20 backdrop-blur-sm"
              >
                <div className="flex justify-center mb-4">
                  <CheckCircle2 className="w-16 h-16 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Assets Uploaded</h3>
                <p className="text-muted-foreground mb-6">
                  {files.length} file{files.length !== 1 ? "s" : ""} received. Our team will review them with your order.
                </p>
                <Button
                  variant="outline"
                  onClick={handleReset}
                  className="rounded-full"
                  data-testid="button-upload-reset"
                >
                  Upload More Files
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="uploader"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {/* Drop Zone */}
                <div
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={onDrop}
                  onClick={() => inputRef.current?.click()}
                  data-testid="dropzone-upload"
                  className={`
                    relative cursor-pointer rounded-2xl border-2 border-dashed transition-all duration-300 p-10 text-center
                    ${isDragging
                      ? "border-blue-500 bg-blue-50/80 dark:bg-blue-900/20 scale-[1.01]"
                      : "border-border bg-white/60 dark:bg-white/5 hover:border-blue-400 hover:bg-blue-50/40 dark:hover:bg-blue-900/10"}
                    backdrop-blur-sm
                  `}
                >
                  <input
                    ref={inputRef}
                    type="file"
                    multiple
                    accept="image/*,.pdf,.doc,.docx,.txt,.zip"
                    className="hidden"
                    onChange={(e) => addFiles(e.target.files)}
                    data-testid="input-file-upload"
                  />

                  <motion.div
                    animate={isDragging ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex justify-center mb-4"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                      <Upload className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    </div>
                  </motion.div>

                  <p className="text-lg font-semibold text-foreground mb-1">
                    {isDragging ? "Drop files here" : "Drag and drop your files"}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    or <span className="text-blue-600 dark:text-blue-400 font-medium underline underline-offset-2">browse to upload</span>
                  </p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {["PNG", "JPG", "PDF", "DOCX", "TXT", "ZIP"].map((fmt) => (
                      <span
                        key={fmt}
                        className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-muted-foreground border border-border"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">Max 20 MB per file</p>
                </div>

                {/* File List */}
                <AnimatePresence>
                  {files.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 space-y-2 overflow-hidden"
                    >
                      {files.map((f) => (
                        <motion.div
                          key={f.id}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 12 }}
                          transition={{ duration: 0.2 }}
                          data-testid={`file-item-${f.id}`}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white dark:bg-white/5 border border-border shadow-sm"
                        >
                          {f.preview ? (
                            <img
                              src={f.preview}
                              alt={f.name}
                              className="w-10 h-10 rounded-lg object-cover border border-border flex-shrink-0"
                            />
                          ) : (
                            <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                              <FileIcon type={f.type} />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-foreground truncate">{f.name}</p>
                            <p className="text-xs text-muted-foreground">{formatBytes(f.size)}</p>
                          </div>
                          <button
                            onClick={(e) => { e.stopPropagation(); removeFile(f.id); }}
                            data-testid={`button-remove-file-${f.id}`}
                            className="w-7 h-7 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex-shrink-0"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit */}
                {files.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 flex flex-col sm:flex-row items-center gap-3"
                  >
                    <Button
                      onClick={handleSubmit}
                      size="lg"
                      data-testid="button-submit-assets"
                      className="w-full sm:w-auto rounded-full h-12 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/20 border-0"
                    >
                      Submit {files.length} Asset{files.length !== 1 ? "s" : ""}
                    </Button>
                    <button
                      onClick={handleReset}
                      data-testid="button-clear-files"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Clear all
                    </button>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
