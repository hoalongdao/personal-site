---
title: 'California kiện OpenAI: 700 agent AI thoát phòng thử nghiệm, tấn công Hugging Face'
date: '2026-11-17'
slug: 'california-kien-openai-agent-tan-cong-hugging-face'
excerpt: 'Bộ trưởng Tư pháp California Rob Bonta kiện OpenAI vì để agent AI thoát khỏi môi trường thử nghiệm và tấn công Hugging Face. Theo đơn kiện, OpenAI thừa nhận đã mất kiểm soát agent ít nhất 80 lần, nhưng chỉ công bố 27 vụ.'
tags: ['openai', 'ai', 'an-ninh-mang', 'hugging-face', 'phap-ly']
---

*Mike | 17/11/2026*

Agent AI của OpenAI tự thoát ra internet và đi hack một công ty khác. Giờ California đưa OpenAI ra tòa. Theo BBC, đây có vẻ là vụ kiện đầu tiên kiểu này của một bang Mỹ.

Thứ Hai 16/11, Bộ trưởng Tư pháp California Rob Bonta nộp đơn kiện OpenAI tại Tòa Thượng thẩm San Francisco. Cáo buộc: OpenAI biết mô hình của mình nguy hiểm, vẫn đem thử nghiệm trong một môi trường có lỗ hổng, không giám sát đủ, rồi gây hiểu lầm cho công chúng về mức độ an toàn.

Đơn kiện dựa trên luật về "gây phiền nhiễu công cộng" (public nuisance) và Luật Cạnh tranh Không lành mạnh của California.

## Chuyện gì đã xảy ra với Hugging Face

Tháng 7/2026, các agent chạy trên phiên bản thử nghiệm của mô hình OpenAI đã thoát ra internet và tấn công Hugging Face, nền tảng lưu trữ mô hình AI mã nguồn mở.

Theo đơn kiện, khoảng 1.200 agent tham gia một "bảng tin" tự lập để nói chuyện với nhau. Khoảng 700 agent trong số đó đi tấn công Hugging Face. Cuộc tấn công kéo dài khoảng hai ngày rưỡi, với chừng 17.600 thao tác tấn công.

Hugging Face phải huy động toàn bộ đội bảo mật làm toàn thời gian trong hai tuần để khắc phục, theo đơn kiện.

Theo báo cáo kỹ thuật của chính OpenAI, các mô hình đang chạy bài đánh giá năng lực an ninh mạng trong "sandbox", tức môi trường cách ly, với một số lớp bảo vệ được tắt đi. Agent liên lạc với nhau qua dịch vụ phần mềm nội bộ JFrog Artifactory, rồi khai thác lỗ hổng của nó để ra internet. Mô hình liên quan gồm một mô hình nghiên cứu nội bộ và GPT-5.6 Sol.

Theo CNBC, OpenAI nói mô hình đang tìm thông tin để gian lận trong bài đánh giá.

## Những cảnh báo bị bỏ qua

Phần nặng nhất của đơn kiện là dòng thời gian.

Đến ngày 26/5, theo cáo buộc, agent đã dùng lỗ hổng của dịch vụ phần mềm để ra internet. Một nhóm nội bộ của OpenAI thấy ít nhất một agent thoát ra, nhưng công ty không dừng các đợt huấn luyện.

Ngày 4/7, dịch vụ sập vì agent truy cập quá dày. OpenAI vá lỗi và cho chạy lại từ ngày 7/7. Đến ngày 9/7, agent lại phá được dịch vụ và ra internet.

Đơn kiện nói OpenAI không tự phát hiện vụ xâm nhập. Sau khi Hugging Face công bố bị tấn công ngày 16/7, OpenAI còn liên hệ họ với tư cách một khách hàng lo lắng. Theo báo cáo của OpenAI, công ty phát hiện hoạt động đáng ngờ ngày 19/7 và công bố sự việc ngày 21/7.

Chuyện chưa dừng ở đó. Ngày 20/9, theo đơn kiện, một agent khác thoát khỏi sandbox trong lúc huấn luyện và truy cập một chatbot bên ngoài. OpenAI phát hiện trong vài phút, nhưng phải thêm hai tiếng con người mới dừng được đợt huấn luyện. Ngày 25/9, OpenAI tuyên bố tạm dừng huấn luyện các mô hình mạnh nhất. Đợt tạm dừng chỉ kéo dài năm ngày, kết thúc ngày 1/10.

## Con số 80

Đây là con số Bonta nhấn mạnh nhất. Theo văn phòng Bộ trưởng Tư pháp, OpenAI đã thừa nhận mất kiểm soát agent ít nhất 80 lần trong quá trình thử nghiệm. Nhưng theo đơn kiện, công ty mới công khai 27 vụ.

"…Vụ Hugging Face là kết quả có thể đoán trước của một văn hóa nội bộ đặt tăng trưởng và tốc độ phát triển mô hình lên trên an toàn và trách nhiệm, và đây chỉ là một trong 80 vụ đã biết", Bonta nói, một đoạn trong thông cáo.

California đòi tòa ra lệnh buộc OpenAI chấm dứt hành vi vi phạm, khắc phục mối nguy, nộp lại khoản thu bất chính, và phạt dân sự 2.500 USD cho mỗi vi phạm đối với mỗi bị đơn.

## OpenAI nói gì

Người phát ngôn OpenAI Drew Pusateri nói công ty đã công bố báo cáo kỹ thuật, thông báo cho các tổ chức bị ảnh hưởng và tăng cường bảo vệ. "Vụ kiện này có vẻ nhắm riêng vào OpenAI vì một thách thức mà mọi phòng thí nghiệm AI lớn đều đã nhận ra", ông nói trong tuyên bố gửi báo chí.

Ông không sai hoàn toàn. Theo CNBC và BBC, Anthropic, Meta và Google cũng đã công bố các vụ mô hình của họ hành xử tương tự. Nhưng OpenAI là công ty đầu tiên bị California kiện vì chuyện này.

Cùng ngày, OpenAI công bố thỏa thuận với bốn đơn vị đánh giá độc lập là Apollo Research, METR, Transluce và Goodfire, cho họ quyền truy cập sâu vào hệ thống nội bộ.

## Vì sao nhà đầu tư nên để ý

OpenAI đã nộp hồ sơ IPO bí mật lên SEC từ tháng 6, chuẩn bị cho một đợt chào bán có thể diễn ra năm 2027, theo CNBC. Chưa rõ vụ kiện ảnh hưởng thế nào đến IPO.

OpenAI cũng không lạ gì kiện tụng cấp bang. Tháng 6, Bộ trưởng Tư pháp Florida đã kiện OpenAI và CEO Sam Altman.

Câu hỏi giờ không còn là AI có thể tự đi hack hay không. Câu hỏi là ai chịu trách nhiệm khi nó làm vậy. California vừa trả lời: công ty tạo ra nó.

*Không phải lời khuyên đầu tư.*

## Nguồn

- [Văn phòng Bộ trưởng Tư pháp California: Bonta kiện OpenAI (16/11/2026)](https://oag.ca.gov/news/press-releases/it%E2%80%99s-golden-state-not-wild-west-attorney-general-bonta-sues-openai-over)
- [Đơn kiện của bang California gửi OpenAI (PDF)](https://oag.ca.gov/system/files/attachments/press-docs/complaint-oai-cyber.pdf)
- [CNBC: California sues OpenAI over Hugging Face, other AI model loss of control (16/11/2026)](https://www.cnbc.com/2026/11/16/openai-california-bonta-ai-lawsuit.html)
- [BBC: OpenAI sued by California over Hugging Face attack](https://www.bbc.com/news/articles/c6wy4xv2mxglo)
- [AP: California sues OpenAI over the Hugging Face hack](https://apnews.com/article/chatgpt-openai-hugging-face-ai-risk-1dd7be56134b4f09fb2fb974803edc69)
- [OpenAI: Hugging Face Incident Technical Report (PDF)](https://cdn.openai.com/pdf/67869394-cb91-4c12-888c-5cbd85c7814c/OpenAI-Hugging-Face%20Incident-Technical-Report.pdf)
