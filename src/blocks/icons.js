import Blockly from "node-blockly/browser"

Blockly.defineBlocksWithJsonArray([
	{
		type: "create_icon",
		message0: "Icon %1 : %2",
		args0: [
			{
				type: "field_number",
				name: "ICON_X",
				value: 0,
				precision: 1,
			},
			{
				type: "field_number",
				name: "ICON_Y",
				value: 0,
				precision: 1,
			},
		],
		inputsInline: true,
		output: "Icon",
		colour: 330,
		tooltip: "Creates an icon.",
		helpUrl: "",
	},
	{
		type: "create_icon_link",
		message0: "Icon %1 : %2 Link %3",
		args0: [
			{
				type: "field_number",
				name: "ICON_X",
				value: 0,
				precision: 1,
			},
			{
				type: "field_number",
				name: "ICON_Y",
				value: 0,
				precision: 1,
			},
			{
				type: "field_input",
				name: "LINK",
				text: "http://orteil.dashnet.org/cookieclicker/img/icons.png",
			},
		],
		output: "Icon",
		colour: 330,
		tooltip: "Creates an icon with a source link.",
		helpUrl: "",
	},
])

Blockly.JavaScript["create_icon"] = function (block) {
	const iconX = block.getFieldValue("ICON_X")
	const iconY = block.getFieldValue("ICON_Y")
	// TODO: Change ORDER_NONE to the correct strength.
	return [`[${iconX}, ${iconY}]`, Blockly.JavaScript.ORDER_NONE]
}

Blockly.JavaScript["create_icon_link"] = function (block) {
	const iconX = block.getFieldValue("ICON_X")
	const iconY = block.getFieldValue("ICON_Y")
	const link = block.getFieldValue("LINK")
	// TODO: Change ORDER_NONE to the correct strength.
	return [`[${iconX}, ${iconY}, "${link}"]`, Blockly.JavaScript.ORDER_NONE]
}
