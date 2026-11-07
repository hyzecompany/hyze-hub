// Força o @emnapi na linha estável 1.x: o pnpm instala a 2.0 beta como peer do
// @napi-rs/wasm-runtime, e ela quebra o `astro check`. Remover quando a 2.0 for estável.
module.exports = {
  hooks: {
    readPackage(pkg) {
      for (const field of ["dependencies", "peerDependencies", "optionalDependencies"]) {
        for (const name of ["@emnapi/core", "@emnapi/runtime"]) {
          if (pkg[field]?.[name]) pkg[field][name] = "1.11.3";
        }
      }
      // Quem usa @napi-rs/wasm-runtime sem fornecer o runtime passa a fornecer a versão estável.
      if (pkg.dependencies?.["@napi-rs/wasm-runtime"] && !pkg.dependencies["@emnapi/runtime"]) {
        pkg.dependencies["@emnapi/runtime"] = "1.11.3";
      }
      return pkg;
    },
  },
};
