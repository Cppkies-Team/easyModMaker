import toolbox from "./toolbox.xml"
import workspace from "./workspace.xml"
import React from "react"
import Blockly from "node-blockly/browser"
import "./blocks/icons"
import "./blocks/upgrades"
import BlocklyWorkspace from "./BlocklyWorkspace"
import { exportPrefix, exportPostfix } from "./consts"
class App extends React.Component {
	constructor(props) {
		super(props)
	}
	onWorkspaceMount(workspace) {
		this.setState({ workspace })
	}
	render() {
		return (
			<>
				<BlocklyWorkspace
					width="1000px"
					height="850px"
					toolbox={toolbox}
					onMount={this.onWorkspaceMount.bind(this)}
				/>
				<button
					onClick={() => {
						navigator.clipboard.writeText(
							`${exportPrefix}${Blockly.JavaScript.workspaceToCode(
								this.state.workspace
							)}${exportPostfix}`
						)
						alert("Done, copied to clipboard!")
					}}
				>
					Export!
				</button>
			</>
		)
	}
}
export { App }
