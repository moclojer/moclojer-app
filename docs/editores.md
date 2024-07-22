# Editores

Neste arquivo, trataremos de como utilizar determinados editores de código para se conectar ao nREPL da aplicação. Para rodar o nREPL, caso ainda não o tenha, clique [aqui](../src/back/README.md#REPL).

# Neovim

Para fazer o eval de todo código no [Neovim](https://neovim.io/), utilizaremos o [Conjure](https://github.com/Olical/conjure), que funciona como um ambiente personalizado para execução de códigos Clojure durante o runtime do nvim.

> Para instalar o Conjure, siga o passo a passo da [documentação oficial](https://github.com/Olical/conjure?tab=readme-ov-file#installation).

## Configurando o ambiente

Podemos utilizar um remap simples, definindo um mapleader, neste caso o `espaço`, e criando as devidas binds no modo normal.

```lua
-- definindo o map leader
vim.g.mapleader = " "

-- eval de apenas uma função
vim.keymap.set("n", "<leader>ee", vim.cmd.ConjureEval)

-- eval de um arquivo completo
vim.keymap.set("n", "<leader>ef", vim.cmd.ConjureEvalFile)

-- Configurações padrão do Conjure
-- Desativar o mapeamento de documentação
vim.g["conjure#mapping#doc_word"] = false

-- Remapear de K para <prefix>gk
vim.g["conjure#mapping#doc_word"] = "gk"

-- Redefinir para o padrão não prefixado K (note a sintaxe especial envolvida em tabela)
vim.g["conjure#mapping#doc_word"] = {"K"}
```

pronto, agora basta reiniciar o Nvim e utilizar as funcoes definidas.

# Emacs
// TODO
