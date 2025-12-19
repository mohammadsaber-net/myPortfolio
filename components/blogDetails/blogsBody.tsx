export function MERNstack({dict}:{dict:any}){

  return (
<div className="prose text-gray-900 dark:text-white mx-auto mt-10 px-4 sm:px-6 lg:px-8">
  <h2 className="text-blue-600 text-2xl mb-4">{dict.blog.title2}</h2>

  <p>{dict.oneBlog["title2-1"]}</p>

  <h3 className="text-xl my-2 font-bold">{dict.oneBlog["title2-2"]}</h3>
  <p>{dict.oneBlog["title2-3"]}</p>

  <h3 className="text-xl my-2 font-bold">{dict.oneBlog["title2-4"]}</h3>
  <p>{dict.oneBlog["title2-5"]}</p>

  <h3 className="text-xl my-2 font-bold">{dict.oneBlog["title2-6"]}</h3>
  <p>{dict.oneBlog["title2-7"]}</p>

  <h3 className="text-xl my-2 font-bold">{dict.oneBlog["title2-8"]}</h3>
  <p>{dict.oneBlog["title2-9"]}</p>

  <h3 className="text-xl my-2 font-bold">{dict.blog["title2-10"]}</h3>
  <p>{dict.oneBlog["title2-11"]}</p>

  <h3 className="text-xl my-2 font-bold">{dict.oneBlog["title2-12"]}</h3>
  <p>{dict.blog["title2-13"]}</p>

  <h3 className="text-xl my-2 font-bold">{dict.oneBlog["title2-14"]}</h3>
  <p>{dict.oneBlog["title2-15"]}</p>

  <h3 className="text-xl my-2 font-bold">{dict.oneBlog["title2-16"]}</h3>
  <p>{dict.oneBlog["title2-17"]}</p>

</div>
  )
}
export function WebsiteImportance({dict,lang}:{dict:any;lang:string}){
  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="prose text-gray-900 dark:text-white mx-auto mt-10 px-4 sm:px-6 lg:px-8">
      <h2>{dict.blog.title3}</h2>

      <p>
        {dict.oneBlog["title1-1"]}
      </p>

      <h3 className="text-xl my-2 font-bold">{dict.oneBlog["title1-2"]}</h3>
      <p>
        {dict.oneBlog["title1-3"]}
      </p>

      <h3 className="text-xl my-2 font-bold">{dict.oneBlog["title1-4"]}</h3>
      <p>
       {dict.oneBlog["title1-5"]}
      </p>

      <h3 className="text-xl my-2 font-bold">{dict.oneBlog["title1-6"]}</h3>
      <p>
       {dict.oneBlog["title1-7"]}
      </p>

      <h3 className="text-xl my-2 font-bold">{dict.oneBlog["title1-8"]}</h3>
      <p>
        {dict.oneBlog["title1-9"]}
      </p>

      <h3 className="text-xl my-2 font-bold">{dict.oneBlog["title1-10"]}</h3>
      <p>
        {dict.oneBlog["title1-11"]}
      </p>

      <h3 className="text-xl my-2 font-bold">{dict.oneBlog["title1-12"]}</h3>
      <p>
       {dict.oneBlog["title1-13"]}
      </p>

      <h3 className="text-xl my-2 font-bold">{dict.oneBlog["title1-14"]}</h3>
      <p>
        {dict.oneBlog["title1-15"]}
      </p>

      <h3 className="text-xl my-2 font-bold">{dict.oneBlog["title1-16"]}</h3>
      <p>
       {dict.oneBlog["title1-17"]}
      </p>
    </div>
  );
}
