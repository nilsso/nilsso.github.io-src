---
---

# Rust

## Crates
Sites to search for crates:
[crates.io](https://crates.io/), [lib.rs](https://lib.rs/)

## Enumerations

---

## Pattern Matching

```rust
fn plus_one(x: Option<i32>) -> Option<i32> {
  match x {
    None => None,
    Some(i) => Some(i+1),
  }
}

println!("{:?}", plus_one(Some(5))); // Some(6)
println!("{:?}", plus_one(None)); // None
```

## `AsRef`

Basically borrowed into.

## Foreign Languages
Dealing with foreign languages is inevitable for some applications,
but in particular with games using Rust wrappers for C rendering libraries.
The `std::ffi` module provides many utilities for handling data across
languages.

### Strings and C strings
Strings in Rust are not zero terminated, so calling C functions expecting
zero terminated C strings is at first a problem. Thankfully `ffi` provides
the following:

-- | --
`OsString` | Owned, mutable platform-native strings.
`OsStr` | Borrowed reference to `OsString` object.
`CString` | Owned, C-compatible, nul-terminated string with no nul bytes in the middle.
`CStr` | Borrowed reference to `CString` object.

