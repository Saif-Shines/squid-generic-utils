import { Squid } from "@squidcloud/client";

let SquidOptions = {
  appId: "3",
};
class DB extends Squid {
  constructor(SquidOptions) {
    super(SquidOptions);
  }
}

let db_instance = new DB(SquidOptions);
console.log("instance", db_instance);
