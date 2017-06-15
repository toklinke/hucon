Blockly.Blocks['servo_object'] = {
    init: function() {
        this.setColour(208);

        this.appendValueInput('VAR')
            .setCheck('MachinePin')
            .appendField('create Servo on')
        this.setOutput(true, 'Servo');

        this.setTooltip(function() {
            return 'Create a servo object which is conntected to the given pin.';
        });
    }
}
Blockly.Python['servo_object'] = function(block) {
    Blockly.Python.definitions_['import_servo'] = 'from hs_servo import HSServo';

    var argument0 = Blockly.Python.valueToCode(block, 'VAR', Blockly.Python.ORDER_ATOMIC) || 'NULL';
    var code = 'HSServo(' + argument0 + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['servo_object_param'] = {
    init: function() {
        this.setColour(208);

        this.appendValueInput('Pin')
            .setCheck('MachinePin')
            .appendField('create Servo on');
        this.appendValueInput('Freq')
            .setCheck('Number')
            .appendField('with frequency');
        this.appendValueInput('MinUs')
            .setCheck('Number')
            .appendField('min');
        this.appendValueInput('MaxUs')
            .setCheck('Number')
            .appendField('and max');
        this.setOutput(true, 'Servo');

        this.setTooltip(function() {
            return 'Create a servo object which is conntected to the given pin.';
        });
    }
}
Blockly.Python['servo_object_param'] = function(block) {
    Blockly.Python.definitions_['import_servo'] = 'from hs_servo import HSServo';

    var argument0 = Blockly.Python.valueToCode(block, 'Pin', Blockly.Python.ORDER_ATOMIC) || 'NULL';
    var argument1 = Blockly.Python.valueToCode(block, 'Freq', Blockly.Python.ORDER_ATOMIC) || 'NULL';
    var argument2 = Blockly.Python.valueToCode(block, 'MinUs', Blockly.Python.ORDER_ATOMIC) || 'NULL';
    var argument3 = Blockly.Python.valueToCode(block, 'MaxUs', Blockly.Python.ORDER_ATOMIC) || 'NULL';
    var code = 'HSServo(' + argument0 + ', ' + argument1 + ', ' + argument2 + ', ' + argument3 + ')';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['servo_set_angle'] = {
    init: function() {
        this.setColour(208);

        this.appendDummyInput()
            .appendField('Set')
            .appendField(new Blockly.FieldVariable('servo'), 'VAR');
        this.appendValueInput('Angle')
            .setCheck('Number')
            .appendField('angle');
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);

        var thisBlock = this;
        this.setTooltip(function() {
            return 'Set the servo angle on pin ' + thisBlock.getFieldValue('VAR');
        });
    }
};
Blockly.Python['servo_set_angle'] = function(block) {
    var varName = Blockly.Python.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    var angle = Blockly.Python.valueToCode(block, 'Angle', Blockly.Python.ORDER_ATOMIC) || '0';
    var code = varName + '.set_angle(' + angle + ')\n';
    return code;
};
