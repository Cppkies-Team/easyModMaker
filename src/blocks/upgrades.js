import Blockly from "node-blockly/browser"

Blockly.defineBlocksWithJsonArray([
	{
		type: "get_upgrade",
		message0: "Get upgrade %1 %2",
		args0: [
			{
				type: "input_dummy",
			},
			{
				type: "input_value",
				name: "NAME_OR_ID",
				check: ["Number", "String"],
			},
		],
		inputsInline: true,
		output: "Upgrade",
		colour: 160,
		tooltip: "Gets an upgrade by either name or Id.",
		helpUrl: "",
	},
	{
		type: "new_upgrade",
		message0:
			"New Upgrade %1 Name %2 Description %3 Price %4 Icon %5 On buy %6",
		args0: [
			{
				type: "input_dummy",
			},
			{
				type: "input_value",
				name: "NAME",
				check: "String",
			},
			{
				type: "input_value",
				name: "DESC",
				check: "String",
			},
			{
				type: "input_value",
				name: "PRICE",
				check: "Number",
			},
			{
				type: "input_value",
				name: "ICON",
				check: "Icon",
			},
			{
				type: "input_statement",
				name: "ONBUY",
			},
		],
		inputsInline: false,
		colour: 160,
		tooltip: "Creates an upgrade.",
		helpUrl: "",
	},
])

Blockly.JavaScript["get_upgrade"] = function (block) {
	const nameOrId = Blockly.JavaScript.valueToCode(
		block,
		"NAME_OR_ID",
		Blockly.JavaScript.ORDER_ATOMIC
	)
	let code = ""
	if (typeof nameOrId === "number") code = `Game.UpgradesById[${nameOrId}]`
	else code = `Game.Upgrades[${nameOrId}]`
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, Blockly.JavaScript.ORDER_NONE]
}

Blockly.JavaScript["new_upgrade"] = function (block) {
	const name = Blockly.JavaScript.valueToCode(
		block,
		"NAME",
		Blockly.JavaScript.ORDER_ATOMIC
	)
	const description = Blockly.JavaScript.valueToCode(
		block,
		"DESC",
		Blockly.JavaScript.ORDER_ATOMIC
	)
	const price = Blockly.JavaScript.valueToCode(
		block,
		"PRICE",
		Blockly.JavaScript.ORDER_ATOMIC
	)
	const icon = Blockly.JavaScript.valueToCode(
		block,
		"ICON",
		Blockly.JavaScript.ORDER_ATOMIC
	)
	const onBuy = Blockly.JavaScript.statementToCode(block, "ONBUY")
	const code = `new Cppkies.Upgrade(${name}, ${description}, ${price}, ${icon}, () => {\n${onBuy}})`
	return code
}
