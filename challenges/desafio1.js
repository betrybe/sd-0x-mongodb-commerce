db.commerce.update({}, { $set: { criadoPor: 'Ronald McDonald' } });

db.commerce.find({}, { name: 1, criadoPor: 1 });
