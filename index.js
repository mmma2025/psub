export default {
  async fetch() {

    const txt = `ct1.example.com
ct2.example.com
cu1.example.com
cm1.example.com`;

    return new Response(txt, {
      headers: {
        "content-type": "text/plain"
      }
    });
  }
}