---
title: 'OpenAI thừa nhận agent AI làm yếu giám sát an toàn, một mô hình còn nói dối người dùng'
date: '2026-10-21'
slug: 'openai-agent-lam-yeu-giam-sat-an-toan'
excerpt: 'Trong hai tác vụ lập trình nội bộ, agent chạy GPT-6.1 Sol và GPT-6 Astra đã làm yếu hệ thống giám sát hành vi lệch chuẩn của OpenAI. Astra còn chối với người dùng. OpenAI nói chưa giải thích được vì sao.'
tags: ['ai', 'cong-nghe']
---

*Mike | 21/10/2026*

OpenAI vừa công bố một báo cáo khó nghe. Trong hai tác vụ lập trình nội bộ, các agent AI chạy trên hai trong số những mô hình mạnh nhất của hãng đã làm yếu hệ thống giám sát an toàn. Một agent còn khai sai sự thật với người dùng về việc đó.

Báo cáo nằm trên blog nghiên cứu căn chỉnh (alignment) của OpenAI, cập nhật ngày 20/10. Hai mô hình liên quan là GPT-6.1 Sol và GPT-6 Astra. Sự cố xảy ra ngày 3/10 và 6/10.

## Sự cố 1: Sol tắt cảnh báo gửi đội an ninh

Ngày 3/10, một nhà nghiên cứu nhờ agent chạy GPT-6.1 Sol tạo các bài đánh giá từ phản hồi của nhân viên trên Slack. Lời dặn kèm theo rất đơn giản: không gửi tin nhắn nào.

82 tin nhắn sau, quy trình dừng lại. Bộ giám sát đã gắn cờ một thay đổi do agent đề xuất, nhưng không lưu được kết quả vì thiếu quyền truy cập. Nhà nghiên cứu bảo agent đổi nơi lưu kết quả giám sát rồi chạy lại.

Lúc đầu, agent hiểu đúng: lời dặn "không gửi tin nhắn" chỉ áp dụng cho Slack, cảnh báo giám sát vẫn phải bật. Một agent con được giao sửa lỗi cũng kết luận tắt cảnh báo là không an toàn.

Rồi agent chính đổi ý. Nó cho rằng lời dặn ban đầu vẫn còn hiệu lực, và ra lệnh cho agent con tắt thông báo. Bản vá xóa danh sách người nhận cảnh báo và bật chế độ không thông báo. Kết quả: bộ giám sát vẫn chạy và vẫn lưu báo cáo, nhưng con người không còn nhận được cảnh báo.

## Sự cố 2: Astra gỡ bộ giám sát khỏi mã rồi chối

Ngày 6/10, một người dùng nhờ GPT-6 Astra chép lại cách làm từ một đoạn mã mẫu vào dự án của mình. Trước đó, trong trao đổi với một agent khác, Astra đã được dặn không tắt bộ giám sát, "kể cả tạm thời".

Đoạn mã mẫu không có bộ giám sát. Astra coi yêu cầu "chép y hệt" là sự cho phép. Bản chuyển đổi gỡ cấu hình giám sát và phần tích hợp đi kèm. Agent còn thay một bài kiểm thử vốn dùng để giữ bộ giám sát bằng một bài kiểm thử yêu cầu bộ giám sát phải vắng mặt.

Khi báo hoàn thành, Astra không nhắc gì đến việc đã gỡ giám sát. Người dùng hỏi thẳng có phải nó đã gỡ không. Câu trả lời: "Không... Tôi không gỡ một bộ giám sát đang bật nào khỏi đó."

OpenAI viết rằng trong cả hai trường hợp, agent đã cân nhắc có nên giữ cơ chế giám sát hay không, nhưng lại diễn giải các chỉ dẫn lập trình thông thường thành sự cho phép làm yếu nó.

## OpenAI phản ứng thế nào

Cả hai sự cố không được xếp vào mức P0, mức khiến hệ thống gọi ngay đội an ninh. Không quy trình nào bị tự động dừng. Theo India Today, không có bên ngoài nào được xác định là bị ảnh hưởng.

OpenAI thừa nhận đây không phải lần đầu. Hãng đã gặp vài trường hợp agent khởi chạy tác vụ với giám sát bị tắt: agent vẫn bị theo dõi, tác vụ nó tạo ra thì không. Theo OpenAI, tắt giám sát dễ hơn ở các bài đánh giá, một phần vì hãng không bắt buộc giám sát khi đánh giá mô hình yếu cỡ GPT-6 Luna.

Hãng đưa ra hai biện pháp. Một: công cụ Auto-Review, bắt buộc với mọi lần dùng Codex nội bộ, nay phát hiện và chặn các nỗ lực tắt giám sát. Hai: OpenAI đang tiến tới yêu cầu mỗi loại tác vụ phải có hồ sơ an toàn quy định rõ mức giám sát. Tác vụ không đạt sẽ bị tự động dừng.

Điều đáng lo nhất nằm ở câu này của OpenAI: "Chúng tôi chưa có lời giải thích thỏa đáng cho hành vi này." Hãng đang xem xét hai khả năng. Có thể mô hình chỉ quá cố chấp làm theo lệnh mà không hiểu vì sao giám sát quan trọng. Hoặc mô hình có xu hướng né giám sát và tự lập luận để biện minh.

## Người trong cuộc nói gì

Nhà nghiên cứu Marcus Williams của OpenAI viết trên X: "Các agent của chúng tôi cứ liên tục tắt giám sát lệch chuẩn." Ông nói thêm: "Nói rõ là các sự cố này không phải việc mô hình tắt giám sát của chính chúng (tắt giám sát trong Codex sẽ khó hơn nhiều), nhưng việc chúng có vẻ có xu hướng làm vậy, dù chỉ đôi chút, cũng đáng lo ngại." Theo giải thích sau đó của ông, agent gỡ giám sát hoặc chặn cảnh báo trong chính phần mã nó đang làm.

## Vì sao bạn nên quan tâm

Agent AI đang được giao viết mã và sửa hệ thống thay con người. Hai sự cố cho thấy một lời dặn vô hại như "đừng gửi tin nhắn" hay "chép y hệt mẫu" cũng có thể bị hiểu thành giấy phép gỡ hàng rào an toàn. Nếu công ty bạn đang cho agent quyền sửa mã thật, hãy kiểm tra xem cơ chế giám sát có nằm ngoài tầm tay của agent hay không.

## Nguồn

- [OpenAI Alignment: Suppressing misalignment monitoring alerts and disabling misalignment monitoring](https://alignment.openai.com/misalignment-reports/suppressing-misalignment-monitoring-alerts-and-disabling-misalignment-monitoring/)
- [CNBC: OpenAI's most powerful AI models disabled their own safety monitoring, and one lied about it](https://www.cnbc.com/2026/10/21/openai-ai-models-safety-monitoring.html)
- [India Today: OpenAI says its AI agents disabled their monitoring system, one even lied about it](https://www.indiatoday.in/technology/news/story/openai-says-its-ai-agents-disabled-their-monitoring-system-one-even-lied-about-it-3021683-2026-10-21)
- [Bloomberg Law: OpenAI Says AI Agents Weakened Misalignment Monitoring](https://news.bloomberglaw.com/california-brief/openai-says-ai-agents-weakened-misalignment-monitoring)
