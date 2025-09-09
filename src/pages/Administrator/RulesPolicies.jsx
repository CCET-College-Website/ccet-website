import React from "react";
import pdfFile from "../../assets/PDFs/Administrator/rules-policies-2022.pdf";

export default function RulesPolicies() {
  return (
    <div className="py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-semibold text-center mb-6 tracking-wide">
          RULES AND POLICIES
        </h1>

        {/* subtle divider */}
        <div className="h-px bg-gray-200 mb-8" />

        {/* Viewer container */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <div className="max-w-[1100px] mx-auto">
            {/* top controls */}
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">
                Applicability of Central Service Rules
              </h2>

              <div className="flex items-center gap-3">
                <a
                  href={pdfFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-2 border border-gray-300 rounded hover:bg-white"
                >
                  Open in new tab
                </a>
                <a
                  href={pdfFile}
                  download
                  className="text-sm px-3 py-2 bg-orange-600 text-white rounded hover:bg-orange-500"
                >
                  Download PDF
                </a>
              </div>
            </div>

            {/* responsive iframe / PDF viewer */}
            <div className="w-full border border-gray-300 rounded overflow-hidden">
              <iframe
                title="Rules and Policies PDF"
                src={pdfFile}
                className="w-full"
                style={{ minHeight: "60vh", height: "75vh", border: "none" }}
              />
            </div>

            {/* fallback */}
            <div className="text-sm text-gray-600 mt-3">
              If the PDF doesn't display,{" "}
              <a
                href={pdfFile}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-600"
              >
                click here to open it
              </a>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
