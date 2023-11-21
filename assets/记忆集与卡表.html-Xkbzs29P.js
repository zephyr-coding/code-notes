const e=JSON.parse('{"key":"v-f000c0d6","path":"/notes/java/jvm/%E8%AE%B0%E5%BF%86%E9%9B%86%E4%B8%8E%E5%8D%A1%E8%A1%A8.html","title":"记忆集与卡表","lang":"zh-CN","frontmatter":{"title":"记忆集与卡表","description":"记忆集和卡表是为了解决被老年代对象引用的新生代对象的问题。 在 Java 的垃圾收集中，年轻代（Young Generation）包含新创建的对象，而老年代（Old Generation）包含已经存活了一段时间的对象。并发垃圾回收时，通常会涉及到年轻代和老年代之间的引用关系。 卡表和记忆集的主要作用是跟踪老年代中哪些部分被新生代对象引用。这是因为老年代...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/code-notes/notes/java/jvm/%E8%AE%B0%E5%BF%86%E9%9B%86%E4%B8%8E%E5%8D%A1%E8%A1%A8.html"}],["meta",{"property":"og:site_name","content":"code notes"}],["meta",{"property":"og:title","content":"记忆集与卡表"}],["meta",{"property":"og:description","content":"记忆集和卡表是为了解决被老年代对象引用的新生代对象的问题。 在 Java 的垃圾收集中，年轻代（Young Generation）包含新创建的对象，而老年代（Old Generation）包含已经存活了一段时间的对象。并发垃圾回收时，通常会涉及到年轻代和老年代之间的引用关系。 卡表和记忆集的主要作用是跟踪老年代中哪些部分被新生代对象引用。这是因为老年代..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-21T06:45:32.000Z"}],["meta",{"property":"article:author","content":"Mr.Hope"}],["meta",{"property":"article:modified_time","content":"2023-11-21T06:45:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"记忆集与卡表\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-21T06:45:32.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[],"git":{"createdTime":1700505313000,"updatedTime":1700549132000,"contributors":[{"name":"peng1996","email":"33412356+peng1996@users.noreply.github.com","commits":1},{"name":"shisheng.zp","email":"shisheng.zp@alibaba-inc.com","commits":1}]},"readingTime":{"minutes":1.06,"words":318},"filePathRelative":"notes/java/jvm/记忆集与卡表.md","localizedDate":"2023年11月20日","autoDesc":true}');export{e as data};
