import Blockly from "node-blockly/browser"
import React from "react"

export default class BlocklyWorkspace extends React.Component {
	constructor(props) {
		super(props)
		this.state = { workspace: null }
	}
	componentDidMount() {
		this.setState(
			{
				workspace: Blockly.inject("blocklyDiv", {
					toolbox: this.props.toolbox,
				}),
			},
			() => this.props.onMount(this.state.workspace)
		)
	}
	render() {
		return (
			<div
				id="blocklyDiv"
				style={{ height: this.props.height, width: this.props.width }}
			></div>
		)
	}
}
