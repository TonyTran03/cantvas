import { useSnapshot } from "valtio";
import { editorState } from "../state/valtioStore";

export default function SidePanelToggle({ activePanel, onPanelChange }) {
  return (
    <div className="flex  space-y-2 p-4">
      <button
        className={`btn ${
          activePanel === "blocks" ? "btn-primary" : "btn-ghost"
        }`}
        onClick={() => onPanelChange("blocks")}
      >
        Blocks
      </button>
      <button
        className={`btn ${
          activePanel === "assets" ? "btn-primary" : "btn-ghost"
        }`}
        onClick={() => onPanelChange("assets")}
      >
        Chat
      </button>
    </div>
  );
}
