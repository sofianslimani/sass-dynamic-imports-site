---
---

# Usage

### Learn how to use Sass Dynamic imports in your project.

in scss file:

```scss
@import "./[folder_name]/**/*.scss";
```

will watch all scss files on any folder on [folder_name] folder

```scss
.class {
  color: env(VARIABLE);
}
```

will use env Variable

```scss
@minimify;
```

will minimify css file
