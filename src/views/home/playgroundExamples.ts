// Generated from TanScript's golden test suite (tests/golden/*.tan).

export interface Example {
    id: string;
    label: string;
    source: string;
}

export const EXAMPLES: Example[] = [
    {
        id: 'euler1',
        label: 'Project Euler #1',
        source: 'let sum = 0;\n\nfor(let i = 0; i < 1000; i++){\n    if i % 3 == 0 || i % 5 == 0 {\n        sum += i;\n    }\n}\n\nprintf("%d\\n", sum);\n',
    },
    {
        id: 'structs',
        label: 'Structs + functions',
        source: 'struct Point {\n    x: u32,\n    y: u32,\n}\n\ndef sum(x: u32, y: u32): u32 {\n    let p = Point {\n        x: x,\n        y: y,\n    };\n\n    p.x + p.y\n}\n\nprintf("%d\\n", sum(3, 4));\n',
    },
    {
        id: 'linked-list',
        label: 'Linked list (pointers)',
        source: 'struct Node {\n    value: i64,\n    next: *Node,\n}\n\ndef sum(head: *Node): i64 {\n    let total: i64 = 0;\n    let current = head;\n    while current != null {\n        total += (*current).value;\n        current = (*current).next;\n    }\n    return total;\n}\n\nlet c = Node {\n    value: 3,\n    next: null,\n};\nlet b = Node {\n    value: 2,\n    next: &c,\n};\nlet a = Node {\n    value: 1,\n    next: &b,\n};\n\nprintf("%d\\n", (*a.next).value);\nprintf("%d\\n", (*(*a.next).next).value);\nprintf("%d\\n", sum(&a));\n\n(*a.next).value = 20;\nprintf("%d\\n", b.value);\nprintf("%d\\n", sum(&a));\n',
    },
    {
        id: 'generics',
        label: 'Generics',
        source: 'struct Token {\n    kind: u8,\n    data: u64,\n}\n\nstruct Node<T> {\n    value: T,\n    next: *Node<T>,\n}\n\ndef sum(head: *Node<i64>): i64 {\n    let total: i64 = 0;\n    let current = head;\n    while current != null {\n        total += (*current).value;\n        current = (*current).next;\n    }\n    return total;\n}\n\ndef push(head: *Node<Token>, value: Token) {\n    let current = head;\n    while (*current).next != null {\n        current = (*current).next;\n    }\n    let node: *Node<Token> = calloc(1, 17);\n    (*node).value = value;\n    (*current).next = node;\n}\n\nlet c: *Node<i64> = calloc(1, 16);\n(*c).value = 3;\nlet b: *Node<i64> = calloc(1, 16);\n(*b).value = 2;\n(*b).next = c;\nlet a: *Node<i64> = calloc(1, 16);\n(*a).value = 1;\n(*a).next = b;\nprintf("%d\\n", sum(a));\n\nlet byte: *Node<u8> = calloc(1, 9);\n(*byte).value = 200;\nprintf("%d\\n", (*byte).value);\nprintf("%d\\n", (*byte).next == null);\n\nlet tokens: *Node<Token> = calloc(1, 17);\n(*tokens).value = Token { kind: 1, data: 100 };\npush(tokens, Token { kind: 2, data: 200 });\npush(tokens, Token { kind: 3, data: 300 });\nlet current = tokens;\nwhile current != null {\n    printf("%d %llu\\n", (*current).value.kind, (*current).value.data);\n    current = (*current).next;\n}\n\nlet nested: *Node<*Node<i64>> = calloc(1, 16);\n(*nested).value = a;\nprintf("%d\\n", (*(*(*nested).value).next).value);\n',
    },
    {
        id: 'match',
        label: 'Enums + match',
        source: "enum Color {\n    Red,\n    Green,\n    Blue,\n}\n\ndef color_name(c: Color): char {\n    let letter: char = '?';\n    match c {\n        Color::Red => letter = 'R';\n        Color::Green => letter = 'G';\n        Color::Blue => letter = 'B';\n    };\n    letter\n}\n\nprintf(\"%c %c %c\\n\", color_name(Color::Red), color_name(Color::Green), color_name(Color::Blue));\n\ndef describe(x: i32): i32 {\n    let kind = 0;\n    match x {\n        1 => kind = 1;\n        2 => {\n            printf(\"two\\n\");\n            kind = 2;\n        }\n        _ => kind = 99;\n    };\n    kind\n}\n\nprintf(\"%d %d %d\\n\", describe(1), describe(2), describe(-5));\n\nlet grade: char = 'B';\nmatch grade {\n    'A' => printf(\"great\\n\");\n    'B' => printf(\"good\\n\");\n    _ => printf(\"ok\\n\");\n};\n",
    },
    {
        id: 'mandelbrot',
        label: 'Mandelbrot (fixed-point)',
        source: "def escapeTime(cr: i64, ci: i64, maxIter: i64): i64 {\n    let zr: i64 = 0;\n    let zi: i64 = 0;\n    let iter: i64 = 0;\n\n    while iter < maxIter {\n        let zr2 = zr * zr / 4096;\n        let zi2 = zi * zi / 4096;\n        if zr2 + zi2 > 16384 {\n            return iter;\n        }\n\n        zi = 2 * zr * zi / 4096 + ci;\n        zr = zr2 - zi2 + cr;\n        iter++;\n    }\n\n    maxIter\n}\n\nlet palette = \" .:-=+*#%@\";\nlet width: i64 = 100;\nlet height: i64 = 40;\nlet maxIter: i64 = 60;\n\nfor (let row: i64 = 0; row < height; row++) {\n    for (let col: i64 = 0; col < width; col++) {\n        let cr = col * 12288 / width - 8192;\n        let ci = row * 9830 / height - 4915;\n        let n = escapeTime(cr, ci, maxIter);\n        if n == maxIter {\n            putchar('@');\n        } else {\n            putchar(palette[n % 9]);\n        }\n    }\n    putchar('\\n');\n}\n",
    },
];
