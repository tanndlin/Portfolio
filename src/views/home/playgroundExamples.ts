// Mostly generated from TanScript's golden test suite (tests/golden/*.tan).

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
    {
        id: 'maze',
        label: 'Maze generator',
        source: "struct List<T> {\n    arr: *T,\n    length: u32,\n    size: u32,\n}\n\ndef new_list<T>(): *List<T> {\n    let ret: *List<T> = calloc(1, sizeof(List<T>));\n    ret->size = 10;\n    ret->arr = malloc(ret->size * sizeof(T));\n    ret\n}\n\ndef list_get<T>(list: *List<T>, index: u32): T {\n    list->arr[index]\n}\n\ndef list_last<T>(list: *List<T>): T {\n    list->arr[list->length - 1]\n}\n\ndef list_push<T>(list: *List<T>, item: T) {\n    if list->length == list->size {\n        list_grow(list);\n    }\n\n    list->arr[list->length++] = item;\n}\n\ndef list_pop<T>(list: *List<T>): T {\n    if list->length == 0 {\n        printf(\"list_pop on empty list\\n\");\n        exit(1);\n    }\n\n    list->length--;\n    list->arr[list->length]\n}\n\ndef list_grow<T>(list: *List<T>) {\n    if list->size == 0 {\n        list->size = 10;\n    } else {\n        list->size *= 2;\n    }\n\n    list->arr = realloc(list->arr, list->size * sizeof(T));\n}\n\nstruct Cell {\n    up: bool,\n    down: bool,\n    left: bool,\n    right: bool,\n}\n\nstruct Pos {\n    x: u32,\n    y: u32,\n}\n\ndef is_visited(cell: Cell): bool {\n    cell.up || cell.down || cell.left || cell.right\n}\n\nlet width: u32 = 30;\nlet height: u32 = 15;\n\nsrand(time(0));\n\nlet cells: *Cell = calloc(width * height, sizeof(Cell));\n\nlet options: *u32 = calloc(4, sizeof(u32));\nlet stack: *List<Pos> = new_list();\ncells[0].up = true;\nlist_push(stack, Pos { x: 0, y: 0 });\n\nwhile stack->length > 0 {\n    let current = list_last(stack);\n    let x = current.x;\n    let y = current.y;\n    let here = y * width + x;\n\n    let count: u32 = 0;\n    if y > 0 && !is_visited(cells[here - width]) {\n        options[count++] = 0;\n    }\n    if y + 1 < height && !is_visited(cells[here + width]) {\n        options[count++] = 1;\n    }\n    if x > 0 && !is_visited(cells[here - 1]) {\n        options[count++] = 2;\n    }\n    if x + 1 < width && !is_visited(cells[here + 1]) {\n        options[count++] = 3;\n    }\n\n    if count == 0 {\n        list_pop(stack);\n        continue;\n    }\n\n    let next = current;\n    match options[(rand() as u32) % count] {\n        0 => {\n            cells[here].up = true;\n            cells[here - width].down = true;\n            next.y = y - 1;\n        }\n        1 => {\n            cells[here].down = true;\n            cells[here + width].up = true;\n            next.y = y + 1;\n        }\n        2 => {\n            cells[here].left = true;\n            cells[here - 1].right = true;\n            next.x = x - 1;\n        }\n        3 => {\n            cells[here].right = true;\n            cells[here + 1].left = true;\n            next.x = x + 1;\n        }\n    };\n\n    list_push(stack, next);\n}\n\ncells[width * height - 1].down = true;\n\nprintf(\"+\");\nfor (let x: u32 = 0; x < width; x++) {\n    if cells[x].up {\n        printf(\"  +\");\n    } else {\n        printf(\"--+\");\n    }\n}\nprintf(\"\\n\");\n\nfor (let y: u32 = 0; y < height; y++) {\n    printf(\"|\");\n    for (let x: u32 = 0; x < width; x++) {\n        if cells[y * width + x].right {\n            printf(\"   \");\n        } else {\n            printf(\"  |\");\n        }\n    }\n    printf(\"\\n+\");\n    for (let x: u32 = 0; x < width; x++) {\n        if cells[y * width + x].down {\n            printf(\"  +\");\n        } else {\n            printf(\"--+\");\n        }\n    }\n    printf(\"\\n\");\n}\n",
    },
];
