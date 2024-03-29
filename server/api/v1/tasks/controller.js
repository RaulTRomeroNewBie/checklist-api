// server/api/v1/tasks/controller.js

/*
exports.all = (req, res, next) => {
  res.json({ message: 'SHOW ALL' });
}
*/

export function create(req, res, next) {
  const { body = {} } = req;
  res.json(body);
};

export function all(req, res, next) {
  res.json([]);
};

export function read(req, res, next) {
  const { params = {} } = req;
  const { id } = params;
  res.json({
    id,
  });
};

export function update(req, res, next) {
  const { body = {}, params = {} } = req;
  const { id } = params;
  res.json({
    id,
    body
  });
};

export function erase(req, res, next) {
  const { params = {} } = req;
  const { id } = params;
  res.json({
    id,
  });
};
