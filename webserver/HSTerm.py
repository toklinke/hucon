#!/usr/bin/python

from HSLogMessage import HSLogMessage

global log_message
log_message = HSLogMessage()

class HSTerm:

    @staticmethod
    def term(message):
        """
        Print a message on the terminal.
        """
        print(message)

    @staticmethod
    def clear():
        log_message.clear()

    @staticmethod
    def join():
        log_message.join()

    @staticmethod
    def requeue(message):
        log_message.requeue(message)

    @staticmethod
    def empty():
        log_message.empty()

    @staticmethod
    def term_exec(message):
        """
        Write a line into the exec file and append a html and normal line break.
        """
        log_message.post(str(message))

    @staticmethod
    def get_message_wait():
        """
        Wait for a new message and return ist
        """
        return log_message.wait()
