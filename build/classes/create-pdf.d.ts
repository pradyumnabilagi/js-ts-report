/// <reference types="node" />
import puppteer from 'puppeteer';
export default class CreatePdf {
    private browser;
    private pdfOptions;
    constructor(_pdfOtpions: puppteer.PDFOptions);
    create: (html: string) => Promise<Buffer>;
}
//# sourceMappingURL=create-pdf.d.ts.map