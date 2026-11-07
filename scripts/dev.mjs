// `pnpm dev`: sobe TUDO (3 sites, API e catálogo do design system), acessível no PC e no celular.
// O IP é detectado a cada execução, então funciona em qualquer rede Wi-Fi.
import { spawn } from "node:child_process";
import { networkInterfaces } from "node:os";

const ips = Object.values(networkInterfaces())
  .flat()
  .filter((i) => i && i.family === "IPv4" && !i.internal)
  .map((i) => i.address)
  // Wi-Fi/cabo costuma ser 192.168.x.x; adaptadores virtuais (WSL, Hyper-V) ficam por último.
  .sort((a, b) => Number(b.startsWith("192.168.")) - Number(a.startsWith("192.168.")));

const apps = [
  ["Hub (site do grupo)", 4321],
  ["Hyze Sites", 4322],
  ["Hyze Consultoria", 4323],
  ["Design system", 4320],
  ["API (saúde)", "8787/health"],
];

const ip = ips[0];
console.log("\n  Hyze — servidores de desenvolvimento\n");
console.log(`  ${"".padEnd(22)}${"No PC".padEnd(32)}No celular (mesmo Wi-Fi)`);
for (const [name, port] of apps) {
  const pc = `http://localhost:${port}`;
  const cel = ip ? `http://${ip}:${port}` : "(sem rede)";
  console.log(`  ${name.padEnd(22)}${pc.padEnd(32)}${cel}`);
}
if (ips.length > 1)
  console.log(`\n  Se o celular não abrir, troque o IP por: ${ips.slice(1).join(", ")}`);
console.log(
  "  Primeira vez: se o Windows perguntar sobre o firewall, permita em redes privadas.\n",
);

const child = spawn("pnpm -r --parallel dev", { stdio: "inherit", shell: true });
child.on("exit", (code) => process.exit(code ?? 0));
