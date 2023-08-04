# Change Log

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