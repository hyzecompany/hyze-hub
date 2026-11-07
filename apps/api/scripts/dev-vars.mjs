// Cria o .dev.vars (segredos locais de teste) a partir do exemplo, se ainda não existir.
import { copyFileSync, existsSync } from "node:fs";

if (!existsSync(".dev.vars")) {
  copyFileSync(".dev.vars.example", ".dev.vars");
  console.log("Criado .dev.vars a partir de .dev.vars.example");
}
