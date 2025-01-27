const dataFAQs = [
  [
    "Chatbot này hoạt động như thế nào?",
    `Chatbot này sử dụng kỹ thuật Tìm kiếm Kết hợp với Tổng hợp (Retrieval-Augmented Generation - RAG) để tìm kiếm và cung cấp thông tin pháp lý chính xác từ cơ sở dữ liệu.`
  ],
  [
    `Kỹ thuật RAG là gì?`, 
    `RAG là một kỹ thuật kết hợp giữa tìm kiếm thông tin và mô hình ngôn ngữ lớn (LLM) để tạo ra các câu trả lời chính xác dựa trên dữ liệu hiện có.`
  ],
  [
    `Chatbot này có thể tư vấn về những lĩnh vực pháp lý nào?`,
    `Chatbot có thể tư vấn về nhiều khía cạnh của lĩnh vực pháp lý, đặc biệt là luật dân sự, ví dụ như Hôn nhân gia đình, luật đất đai, luật doanh nghiệp.`
  ],
  [
    `Mô hình ngôn ngữ lớn (LLM) là gì?`,
    `Mô hình ngôn ngữ lớn (LLM) là một loại mô hình AI được huấn luyện trên lượng lớn dữ liệu văn bản để có thể hiểu và tạo ra văn bản giống như con người.`],
  [
    `Ví dụ về một câu hỏi pháp lý dân sự mà chatbot có thể trả lời?`,
    `Một ví dụ: "Tôi có quyền yêu cầu bồi thường thiệt hại do tai nạn giao thông như thế nào?"`
  ],
  [
    `Chatbot này có thể thay thế luật sư không?`,
    `Chatbot này cung cấp thông tin pháp lý cơ bản và tư vấn sơ bộ, nhưng không thể thay thế luật sư chuyên nghiệp trong các tình huống phức tạp.`
  ],
  [
    `Thông tin pháp lý do chatbot cung cấp có độ chính xác như thế nào?`,
    `Chatbot sử dụng cơ sở dữ liệu được cập nhật và các mô hình AI hiện đại để đảm bảo thông tin pháp lý chính xác, nhưng người dùng nên kiểm tra lại thông tin với chuyên gia.`
  ],
  [
    `Chatbot có thể giúp tôi viết đơn từ pháp lý không?`,
    `Chatbot có thể cung cấp mẫu đơn từ và hướng dẫn cơ bản, nhưng không thể tạo ra các văn bản pháp lý tùy chỉnh theo từng trường hợp cụ thể.`
  ],
  [
    `Làm thế nào để chatbot xử lý các câu hỏi không nằm trong cơ sở dữ liệu?`,
    `Khi gặp câu hỏi không nằm trong cơ sở dữ liệu, chatbot sẽ sử dụng mô hình ngôn ngữ lớn để tạo ra câu trả lời dựa trên kiến thức chung và thông tin đã học.`
  ],
  [
    `Ví dụ về câu hỏi liên quan đến quyền sở hữu đất đai mà chatbot có thể trả lời?`,
    `Ví dụ: "Quy trình chuyển nhượng quyền sử dụng đất cần những giấy tờ gì?"`
  ],
]


const FAQPage = () => {
  return (
    <div className="flex justify-center min-h-[85vh] h-auto bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="md:w-[50%]">
        <h1 className="text-3xl text-center font-bold p-5 bg-[linear-gradient(90deg,hsl(var(--s))_0%,hsl(var(--sf))_9%,hsl(var(--pf))_42%,hsl(var(--p))_47%,hsl(var(--a))_100%)] bg-clip-text will-change-auto [-webkit-text-fill-color:transparent] [transform:translate3d(0,0,0)] motion-reduce:!tracking-normal max-[1280px]:!tracking-normal [@supports(color:oklch(0_0_0))]:bg-[linear-gradient(90deg,hsl(var(--s))_4%,color-mix(in_oklch,hsl(var(--sf)),hsl(var(--pf)))_22%,hsl(var(--p))_45%,color-mix(in_oklch,hsl(var(--p)),hsl(var(--a)))_67%,hsl(var(--a))_100.2%)]">Những câu hỏi thường gặp (FAQs)</h1>
        {
          dataFAQs.map((item,i)=><div key={i} className="mt-2 collapse collapse-plus shadow-md rounded-xl bg-white">
          <input type="checkbox" />
          <div className="collapse-title text-base font-medium">
            {item[0]}
          </div>
          <div className="collapse-content">
          {item[1].split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))
          }
          </div>
        </div>
          )
        }

        {/* <div className="mt-2 collapse collapse-plus shadow-md rounded-xl bg-white">
          <input type="checkbox" />
          <div className="collapse-title text-base font-medium">
            Cách sử dụng chatbot để tra cứu thông tin
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="mt-2 collapse collapse-plus shadow-md rounded-xl bg-white">
          <input type="checkbox" />
          <div className="collapse-title text-base font-medium">
          Thông tin từ chatbot có đáng tin cậy không?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div>
        <div className="mt-2 collapse collapse-plus shadow-md rounded-xl bg-white">
          <input type="checkbox" />
          <div className="collapse-title text-base font-medium">
          Tôi có thể liên hệ hỗ trợ như thế nào?
          </div>
          <div className="collapse-content">
            <p>hello</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
export default FAQPage;
