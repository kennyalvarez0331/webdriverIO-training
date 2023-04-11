Feature: Inventory

    @demo @smoke
    Scenario Outline: Inventory demo
        Given Login to inventory web app
        Then inventory page should list <NumberOfProducts> products
        Then Validate all products have valid price

        Examples:
            | TestID    | NumberOfProducts |
            | INV_TC001 | 6                |