import $ from 'jquery'
import JUI from 'juijs-ui'
import TimePickerComp from 'juijs-ui/src/components/timepicker'
import DatePickerComp from 'juijs-ui/src/components/datepicker'

JUI.use(TimePickerComp, DatePickerComp);

const today = new Date();

export default {
    name: 'uix-timepicker',
    props: {
        size: {
            type: String,
            required: false,
            default: 'small' // or mini, large
        },
        useDate: {
            type: Boolean,
            required: false,
            default: true
        },
        useTime: {
            type: Boolean,
            required: false,
            default: true
        },
        minYear: {
            type: Number,
            required: false,
            default: today.getFullYear() - 5
        },
        maxYear: {
            type: Number,
            required: false,
            default: new Date().getFullYear() + 5
        },
        year: {
            type: Number,
            required: false,
            default: today.getFullYear()
        },
        month: {
            type: Number,
            required: false,
            default: today.getMonth() + 1
        },
        date: {
            type: Number,
            required: false,
            default: today.getDate()
        },
        hours: {
            type: Number,
            required: false,
            default: today.getHours()
        },
        minutes: {
            type: Number,
            required: false,
            default: today.getMinutes()
        },
        useCalendar: {
            type: Boolean,
            required: false,
            default: false
        },
        calendarTitleFormat: {
            type: String,
            required: false,
            default: 'yyyy.MM'
        },
        calendarFormat: {
            type: String,
            required: false,
            default: 'yyyy-MM-dd'
        }
    },
    watch: {
        year: function(newVal, oldVal) {
            if(newVal == this.ui.getYear()) return;
            this.ui.setYear(newVal);
            console.log("change!!");
        },
        month: function(newVal, oldVal) {
            if(newVal == this.ui.getMonth()) return;
            this.ui.setMonth(newVal);
        },
        date: function(newVal, oldVal) {
            if(newVal == this.ui.getDate()) return;
            this.ui.setDate(newVal);
        },
        hours: function(newVal, oldVal) {
            if(newVal == this.ui.getHours()) return;
            this.ui.setHours(newVal);
        },
        minutes: function(newVal, oldVal) {
            if(newVal == this.ui.getMinutes()) return;
            this.ui.setMinutes(newVal);
        }
    },
    computed: {
        dateForCalendar: function() {
            const now = new Date();
            now.setFullYear(this.year, this.month - 1, this.date);
            now.setHours(this.hours);
            now.setMinutes(this.minutes);
            now.setSeconds(0);
            now.setMilliseconds(0);
            return now;
        }
    },
    methods: {
        onClickCalendarBtn: function() {
            if($(this.calendar.root).css('display') == 'none') {
                $(this.calendar.root).show();
            } else {
                $(this.calendar.root).hide();
            }
        }
    },
    mounted: function() {
        const self = this;

        this.ui = JUI.create('ui.timepicker', this.$el, {
            year: this.year,
            month: this.month,
            date: this.date,
            hours: this.hours,
            minutes: this.minutes,
            minYear: this.minYear,
            maxYear: this.maxYear,
            event: {
                change: function(data) {
                    self.$emit('change', data);
                }
            }
        });

        if(this.useCalendar) {
            const _scopeId = this.$options._scopeId || '';

            this.calendar = JUI.create('ui.datepicker', this.$el.getElementsByClassName('datepicker'), {
                titleFormat: this.calendarTitleFormat,
                format: this.calendarFormat,
                date: this.dateForCalendar,
                tpl: {
                    date: `<td ${_scopeId}><!= date !></td>`
                },
                event: {
                    select: function(date, e) {
                        if(!e) return;

                        self.$emit('change', {
                            year: this.getDate().getFullYear(),
                            month: this.getDate().getMonth() + 1,
                            date: this.getDate().getDate(),
                            hours: self.hours,
                            minutes: self.minutes
                        });

                        $(self.calendar.root).hide();
                    }
                }
            });
        }
    }
}