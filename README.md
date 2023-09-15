[![Continuous Integration](https://github.com/kaiosilveira/substitute-algorithm-refactoring/actions/workflows/ci.yml/badge.svg)](https://github.com/kaiosilveira/substitute-algorithm-refactoring/actions/workflows/ci.yml)

ℹ️ _This repository is part of my Refactoring catalog based on Fowler's book with the same title. Please see [kaiosilveira/refactoring](https://github.com/kaiosilveira/refactoring) for more details._

---

# Substitute Algorithm

<table>
<thead>
<th>Before</th>
<th>After</th>
</thead>
<tbody>
<tr>
<td>

```javascript
function foundPerson(people) {
  for (let i = 0; i < people.length; i++) {
    if (people[i] === 'Don') {
      return 'Don';
    }

    if (people[i] === 'John') {
      return 'John';
    }

    if (people[i] === 'Kent') {
      return 'Kent';
    }
  }

  return '';
}
```

</td>

<td>

```javascript
function foundPerson(people) {
  const candidates = ['Don', 'John', 'Kent'];
  return people.find(p => candidates.includes(p)) || '';
}
```

</td>
</tr>
</tbody>
</table>

Sometimes we try our best to improve a piece of code, but it's not enough. Some other times, we take a look at a piece of logic and identify straightaway an easier, more readable way of implementing it. This refactoring helps us in these cases.

## Working example

Our working example is a `foundPerson` function that's using a suboptimal approach to `if` statements and that's not leveraging the functional aspects of Javascript. Our goal here is to make this function easier to read and potentially shorter.

### Test suite

A test suite was put in place to make sure that for a given input, the output of the function remains the same. This will be critical in providing us with confidence that we haven't broken anything while performing the rewrite.

```javascript
describe('foundPerson', () => {
  it('should return Don if he was found', () => {
    const people = ['Don', 'Kaio', 'Dan'];
    expect(foundPerson(people)).toEqual('Don');
  });

  it('should return John if he was found', () => {
    const people = ['Kaio', 'John', 'Dan'];
    expect(foundPerson(people)).toEqual('John');
  });

  it('should return Kent if he was found', () => {
    const people = ['Kaio', 'Dan', 'Kent'];
    expect(foundPerson(people)).toEqual('Kent');
  });

  it('should return an empty string if none of the expected people were found', () => {
    const people = ['Kaio', 'Dan', 'Enzo'];
    expect(foundPerson(people)).toEqual('');
  });
});
```

### Steps

This is one of the shortest refactorings to document: we simply need to rewrite all the logic. Of course, in the real world, some time and / or previous knowledge is required in order to know how to implement certain algorithms in a more idiomatic way. This is often highly dependent on the programming language we're using and the tools, libs and frameworks we have available at the time.

```diff
diff --git a/src/index.js b/src/index.js
@@ -1,17 +1,4 @@
 export function foundPerson(people) {
-  for (let i = 0; i < people.length; i++) {
-    if (people[i] === 'Don') {
-      return 'Don';
-    }
-
-    if (people[i] === 'John') {
-      return 'John';
-    }
-
-    if (people[i] === 'Kent') {
-      return 'Kent';
-    }
-  }
-
-  return '';
+  const candidates = ['Don', 'John', 'Kent'];
+  return people.find(p => candidates.includes(p)) || '';
 }

```

### Commit history

Below there's the commit history for the steps detailed above.

| Commit SHA                                                                                                                  | Message                              |
| --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ |
| [30d67fc](https://github.com/kaiosilveira/substitute-algorithm-refactoring/commit/30d67fc0dca1ba8c987aa7c3416e2a41271edce8) | rewrite `foundPerson` implementation |

For the full commit history for this project, check the [Commit History tab](https://github.com/kaiosilveira/substitute-algorithm-refactoring/commits/main).
