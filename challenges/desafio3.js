db.produtos.update(
  {},
  { $set: { criadoPor: 'Ronald McDonald' } },
  { multi: true },
);

db.produtos.find({}, { name: 1, criadoPor: 1 });
