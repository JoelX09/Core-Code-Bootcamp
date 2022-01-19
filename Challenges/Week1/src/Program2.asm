  .data
    name: .asciiz "Joel Obdulio Xicará Ríos\n"
  .text
    main:
      li $v0, 4
      la $a0, name
      syscall