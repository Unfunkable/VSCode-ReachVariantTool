# Change Log

## [v0.5.0] - 2024-02-03
- Aliases ending with `obj` can now trigger object type autocompletion
- Indentation rules now have word barriers, which means words like `health` won't unintentionally indent as if `alt` was written
- `do:` autocompletion was fixed and is now `do`
- `object.set_pickup_permissions` function is now correctly highlighted
- `object.add_weapon` funciton now has autocompletion parameters

## [v0.4.0] - 2023-08-05
- Autocompleting `if` statements now automatically inserts a placeholder `<condition>`, `then` and `end`
- `end` is now automatically inserted after `then` and `do`
- `inline` is now correctly syntax highlighted.

## [v0.3.0] - 2023-08-04
- Support for RVT 2.2, including the new functions & names, block comments, allocation, etc.

## [v0.2.3] - 2023-08-02
- Fixed an issue where strings inside function parameters would be colored differently if they included numbers.

## [v0.2.2] - 2023-07-26
- Functions `is_out_of_bounds` and `detach` now show up for autocomplete
- Variables relating to the object death event and hud_target now show up for autocomplete and are highlighted
- Function names shouldn't be highlighted in unrelated contexts anymore (For example: `detach` won't be highlighted in `detached_plasma_cannon`)

## [v0.2.1] - 2022-10-10
- Syntax highlighting fixes for `killer_type_is` and `send_incident`

## [v0.2.0] - 2022-10-08
- Big improvements to syntax highlighting
    - With the "Dark+" theme, every aspect of the code should be colored.
    - Improvements to readability by seperating nested variable colors.
- Parameter fixes for the `try_get_weapon` and `get_weapon` functions: It now correctly prompts to specify the primary or secondary weapon.

## [v0.1.0] - 2022-09-17

- Initial release