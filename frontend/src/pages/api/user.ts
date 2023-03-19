const name_list = ["a", "b", "c", "John Doe"];

let i = 0;

setInterval(() => {
  i++;
  i %= 3;
}, 300);

function handler(req: any, res: any) {
  // リクエストメソッドによって処理を分岐
  if (req.method === "GET") {
    // GETメソッドの場合はユーザー情報を返却
    res.status(200).json({ name: name_list[i] });
  } else {
    // GET以外のメソッドの場合は405エラーを返却
    res.status(405).end();
  }
}

export default handler;
