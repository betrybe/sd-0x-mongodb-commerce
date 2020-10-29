db.produtos.update({}, { $set: { criadoPor: 'Ronald McDonald' } });

db.produtos.find({}, { name: 1, criadoPor: 1 });
