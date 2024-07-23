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

O processo de desenvolvimento por meio do Emacs é tão simples quanto. Basta apenas ter o pacote [`cider`](https://github.com/clojure-emacs/cider) instalado. Os pacotes [`clojure-lsp`](https://clojure-lsp.io) e `clojure-mode` são tecnicamente opcionais, mas ajudam no desenvolvimento também.

É recomendado, como procuramos seguir metodologia TDD, que habilite o modo de `auto-test` do cider. Dessa maneira, quando você evaluar um arquivo ou grupo de arquivos, o cider automaticamente irá re-evaluar e rodar quaisquer testes relacionados.

```lisp
(add-hook 'clojure-mode-hook #'cider-auto-test-mode)
```

As keybindings padrões são:

- **Abrir Cider nREPL**: `C-c M-j`
- **Abrir Cider nREPL editável**: `C-u C-c C-x j j`
- **Evaluar Form**: `C-x C-e`
- **Evaluar Arquivo**: `C-c C-l`
- **Evaluar Pasta Recursivamente**: `C-c M-l`
