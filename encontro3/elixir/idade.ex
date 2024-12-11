IO.write "Digite sua idade: "

idade = IO.read(:stdio, :line) |> String.trim |> String.to_integer

if idade > 21, do: IO.write("Permitido\n"), else: IO.write("BANIDO\n")
