/* eslint-disable prettier/prettier */

import { DataSource } from 'typeorm';
import { Supplier } from '../entities/Supplier.entity';

export const createDatabaseConnection = async () => {
  const dataSource = new DataSource({
    type: 'sqlite',
    database: 'src/database/database.sqlite',
    synchronize: true,
    entities: [Supplier],
  });

  await dataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!")
    })
    .catch((err) => {
      console.error("Error during Data Source initialization", err)
    });

  return dataSource;
};
