import Blockly from "blockly"
import JSGen from "blockly/javascript"

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

JSGen["get_upgrade"] = function (block: Blockly.Block) {
	const nameOrId = JSGen.valueToCode(block, "NAME_OR_ID", JSGen.ORDER_ATOMIC)
	let code = ""
	if (typeof nameOrId === "number") code = `Game.UpgradesById[${nameOrId}]`
	else code = `Game.Upgrades[${nameOrId}]`
	// TODO: Change ORDER_NONE to the correct strength.
	return [code, JSGen.ORDER_NONE]
}

JSGen["new_upgrade"] = function (block: Blockly.Block) {
	const name = JSGen.valueToCode(block, "NAME", JSGen.ORDER_ATOMIC)
	const description = JSGen.valueToCode(block, "DESC", JSGen.ORDER_ATOMIC)
	const price = JSGen.valueToCode(block, "PRICE", JSGen.ORDER_ATOMIC)
	const icon = JSGen.valueToCode(block, "ICON", JSGen.ORDER_ATOMIC)
	const onBuy = JSGen.statementToCode(block, "ONBUY")
	const code = `new Cppkies.Upgrade(${name}, ${description}, ${price}, ${icon}, () => {${onBuy}})`
	return code
}
