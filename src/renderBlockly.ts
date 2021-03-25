import toolbox from "./toolbox.xml"
import workspaceXml from "./workspace.xml"
import Blockly from "blockly"
import JSGen from "blockly/javascript"
import { exportPrefix, exportPostfix } from "./consts"

export function renderWorkspace(element: HTMLElement | null): void {
	if (!element) return
	const workspace = Blockly.inject(element, { toolbox })
	Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(workspaceXml), workspace)
	const button = document.createElement("button")
	button.innerText = "Export!"
	button.addEventListener("click", async () => {
		await navigator.clipboard.writeText(
			`${exportPrefix}${JSGen.workspaceToCode(workspace)}${exportPostfix}`
		)
		alert("Done, wrote to clipboard!")
	})
	element.appendChild(button)
}
