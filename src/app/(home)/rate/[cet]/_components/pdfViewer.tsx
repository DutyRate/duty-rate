import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

// Set the worker source (required for react-pdf to work)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  initialPage?: number;
}

export default function PDFViewer({ initialPage = 1 }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(initialPage);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file="/CET-rules.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
        // The 'workerSrc' option is not needed here. We've already set the global worker source.
        // If you want to use a custom worker, you should update the global setting instead:
        // pdfjs.GlobalWorkerOptions.workerSrc = '/path/to/pdf.worker.min.js';
      >
        <Page pageNumber={pageNumber} width={800} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
      {/* Add navigation controls here if needed */}
    </div>
  );
}
