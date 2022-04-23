import { Client } from './../entities/Client';
import { Transaction, TransactionTypes } from './../entities/Transaction';
import express from 'express';

const router = express.Router();

router.post('/api/client/:clientId/transaction', async (req, res) => {
    let { clientId } = req.params;
    const { type, amount } = req.body;

    const client = await Client.findOne(parseInt(clientId));

    if (!client) {
        return res.status(400).json({
            message: "CLient does not exist "
        })
    }

    const transaction = Transaction.create({
        amount,
        type,
        client
    })
    await transaction.save();

    if (type === TransactionTypes.DEPOSIT) {
        client.balance = client.balance + amount
    } else if (type === TransactionTypes.WITHDRAW) {
        client.balance = client.balance - amount
    }
    await client.save();

    return res.status(200).json({
        message: "Transaction added "
    });

})

export { router as CreateTransactionRouter }
