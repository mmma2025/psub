export default {
  async fetch() {

    const txt = `jp1.example.com
us1.example.com
sg1.example.com`;

    return new Response(txt, {
      headers: {
        "content-type": "text/plain"
      }
    });
  }
}
