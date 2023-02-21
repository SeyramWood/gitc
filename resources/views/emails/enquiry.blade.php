@component('mail::message')
{{--# Message--}}

{{--{{$from_subject}}--}}
{{--<br>--}}
{{--{{$from_message}}--}}

# A New Enquiry Has Been Created

Enquiry Made By: {{$from_first_name.' '.$from_last_name}}

Subject: {{$from_subject}}

Company: {{$from_company}}

Industry: {{$from_industry}}

Message: {{$from_message}}

Thanks,<br>
{{ config('app.name') }}
@endcomponent
