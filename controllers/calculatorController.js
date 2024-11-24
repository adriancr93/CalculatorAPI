const { calculate } = require('../models/calculatorModel');
const { formatResponse } = require('../utils/responseFormatter');

exports.performCalculation = (req, res) => {
    const { num1, num2, operation } = req.body;

    // Input validation
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return res.status(400).json(formatResponse('Both num1 and num2 must be numbers'));
    }

    if (typeof operation !== 'string' || !['+', '-', '*', '/'].includes(operation)) {
        return res.status(400).json(formatResponse('Operation must be one of +, -, *, /'));
    }

    try {
        const result = calculate(num1, num2, operation);
        return res.status(200).json(formatResponse(null, { operation, input: { num1, num2 }, result }));
    } catch (error) {
        return res.status(500).json(formatResponse(error.message));
    }
};