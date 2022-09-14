# Reach Variant Tool support

Basic support for the custom scripting language utilized in DavidJCobb's [Reach Variant Tool](https://www.nexusmods.com/halothemasterchiefcollection/mods/192), for creating and editing Halo: Reach gametypes.

## Features

- Syntax highlighting
- Automatic indentation
- (Mostly) context aware autocompletion, including function parameters

## Notes
- There is no language server, which means the autocompletion isn't *that* smart - it still can suggest irrelevant autocompletions, but it's much better than nothing. This is still something that would be cool to implement down the line.
- Since there is no language server, aliased variables will not be counted. Consider appending the variable type to the end of an alias if it really matters to you. (for example, instead of `vip` try `vip_player`)
- The default VSCode themes like to color everything the same. Consider using the "Dark+" or "Light+" themes or finding something new from the marketplace.
