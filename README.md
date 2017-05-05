toml2js
=========
A command-line utility to convert TOML to JSON.

[![NPM](https://nodei.co/npm/toml2js.png)](https://nodei.co/npm/toml2js/)

Installation
-----------

```
npm install -g toml2js
```

Usage
-----
```bash
$ toml2js test/simple.toml
```
<pre>
{
  "foo": "bar",
  "anArray": [
    1,
    3,
    5,
    7
  ],
  "bool": true,
  "one": 1
}
</pre>

**EXIT STATUS**

The toml2js utility exits with one of the following values:

    | Code |  Description                            |
    |------|-----------------------------------------|
    |   0  |  input was parsed successfully.         |
    |   1  |  failed to parse input.                 |
    |   2  |  An error occurred while reading input. |

License
-------
MIT
