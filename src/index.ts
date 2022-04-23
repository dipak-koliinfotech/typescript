import { createConnection } from "typeorm";
import { Transaction } from './entities/Transaction';
import { Banker } from './entities/Banker';
import { Client } from "./entities/Client";
import { CreateClientRouter } from './routes/CreateClient';
import { CreateBankerRouter } from './routes/CreateBanker';
import { CreateTransactionRouter } from './routes/CreateTransaction';
import express from 'express';

const app = express();

const main = async () => {
    try {
        await createConnection({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'nimap@123',
            database: 'client',
            entities: [Client, Banker, Transaction],
            synchronize: true
        })
        console.log("connection successfully")

        app.use(express.json());
        app.use(CreateClientRouter);
        app.use(CreateBankerRouter);
        app.use(CreateTransactionRouter);

        app.listen(8000, () => {
            console.log(`Server is runnig on port 8000`);
        })
    } catch (error) {
        console.log("Error", error);
    }
}
main()