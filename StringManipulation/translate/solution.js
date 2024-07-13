export function translate(codons) {
  const CodonsAndProteins = new Map([
    ["AUG", "Methionine"],
    ["UUU", "Phenylalanine"],
    ["UUC", "Phenylalanine"],
    ["UUA", "Leucine"],
    ["UUG", "Leucine"],
    ["UCU", "Serine"],
    ["UCC", "Serine"],
    ["UCA", "Serine"],
    ["UCG", "Serine"],
    ["UAU", "Tyrosine"],
    ["UAC", "Tyrosine"],
    ["UGU", "Cysteine"],
    ["UGC", "Cysteine"],
    ["UGG", "Tryptophan"],
    ["UAA", "STOP"],
    ["UAG", "STOP"],
    ["UGA", "STOP"],
  ]);

  let result = [];
  let i = 0;

  while (i < codons.length) {
    const codon = codons.slice(i, i + 3);

    if (CodonsAndProteins.has(codon)) {
      const protein = CodonsAndProteins.get(codon);

      if (protein === "STOP") break;
      result.push(protein);
      i += 3;
    } else throw new Error("Invalid codon");
  }

  return result;
}
