const url = require("url");
const sql = require("mssql");
let err_handler = require("./err_handler");

module.exports = (req, res, pool) => {
  const path = decodeURI(url.parse(req.url).pathname);
  switch (true) {
    case /\/api\/faculties\/.+/.test(path):
      {
        const ps = new sql.PreparedStatement(pool);
        ps.input("faculty", sql.NVarChar);
        ps.prepare("delete faculty where faculty = @faculty", (err, result) => {
          if (err) err_handler(req, res, 500, err.message);
          else {
            ps.execute({ faculty: path.split("/")[3] }, (err, result) => {
              if (err) err_handler(req, res, 500, err.message);
              else {
                res.writeHead(200, {
                  "Content-Type": "application/json; charset=utf-8",
                });
                res.end(
                  JSON.stringify({
                    rowsAffected: result.rowsAffected[0].toString(),
                  })
                );
              }
            });
          }
        });
      }
      break;
    case /\/api\/pulpits\/.+/.test(path):
      {
        pool
          .request()
          .input("pulpit", sql.NVarChar, path.split("/")[3])
          .query("delete pulpit where pulpit = @pulpit", (err, result) => {
            if (err) err_handler(req, res, 500, err.message);
            else {
              res.writeHead(200, {
                "Content-Type": "application/json; charset=utf-8",
              });
              res.end(result.rowsAffected[0].toString());
            }
          });
      }
      break;
    case /\/api\/subjects\/.+/.test(path):
      {
        pool
          .request()
          .input("subject", sql.NVarChar, path.split("/")[3])
          .query("delete subject where subject = @subject", (err, result) => {
            if (err) err_handler(req, res, 500, err.message);
            else {
              res.writeHead(200, {
                "Content-Type": "application/json; charset=utf-8",
              });
              res.end(result.rowsAffected[0].toString());
            }
          });
      }
      break;
    case /\/api\/auditoriumstypes\/.+/.test(path):
      {
        pool
          .request()
          .input("auditorium_type", sql.NVarChar, path.split("/")[3])
          .query(
            "delete auditorium_type where auditorium_type = @auditorium_type",
            (err, result) => {
              if (err) err_handler(req, res, 500, err.message);
              else {
                res.writeHead(200, {
                  "Content-Type": "application/json; charset=utf-8",
                });
                res.end(result.rowsAffected[0].toString());
              }
            }
          );
      }
      break;
    case /\/api\/auditoriums\/.+/.test(path):
      {
        pool
          .request()
          .input("auditorium", sql.NVarChar, path.split("/")[3])
          .query(
            "delete auditorium where auditorium = @auditorium",
            (err, result) => {
              if (err) err_handler(req, res, 500, err.message);
              else {
                res.writeHead(200, {
                  "Content-Type": "application/json; charset=utf-8",
                });
                res.end(result.rowsAffected[0].toString());
              }
            }
          );
      }
      break;
    default:
      err_handler(req, res, 400, "Bad request");
      break;
  }
};
