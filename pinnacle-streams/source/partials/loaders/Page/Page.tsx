import type { ReactElement } from "react";
import { Mountain } from "lucide-react";
// IMPORTED STYLESHEETS
import "./css/Page.css";
// IMPORTED CUSTOM TYPES
import type LayoutProps from "./types/LayoutProps";

const Page = function ({ isViewLoading }: LayoutProps): ReactElement {
    return (
        <div className={`div-page-loader-container${isViewLoading ? " active" : ""}`}>
            <div className="div-page-loader-modal">
                <div className="div-page-loader-modal-icon-container">
                    <Mountain size={48} />
                </div>
            </div>
        </div>
    );
};

export default Page;
